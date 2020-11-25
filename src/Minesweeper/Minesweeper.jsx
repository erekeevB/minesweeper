import React, { useEffect, useRef, useState } from 'react';

import s from './Minesweeper.module.css'

const Minesweeper = ({size, num, setIsSubmit}) => {

    let [isFail, setIsFail] = useState(false)

    let [isSuccess, setIsSuccess] = useState(false)

    let [isUpdate, setIsUpdate] = useState(false)

    let clickNum = useRef(0)

    let [finalGrid, setFinalGrid] = useState([])

    useEffect(()=>{

        let temp = []

        let grid = []

        for(let y = 0; y < size; y = y + 1){
            for(let x = 0; x < size; x = x + 1){
                temp.push({bomb: 0, isOpen: false})
            }
            grid.push(temp)
            temp = []
        }
    
        for(let i = 0; i < num; i = i + 1){
            let a = Math.floor(Math.random() * Math.floor(size));
            let b = Math.floor(Math.random() * Math.floor(size));
            if(grid[a][b].bomb !== 'bomb'){
                grid[a][b].bomb = 'bomb'
            }else{
                i = i - 1
            }
        }
    
        const countCloseBombs = (y, x) => {
    
            let res = 0;
    
            for(let i = 0; i < 3; i = i + 1){
                for(let j = 0; j < 3; j = j + 1){
                    if(i!==1 || j!==1){
                        if(grid[y-1+i] && grid[y-1+i][x-1+j] && grid[y-1+i][x-1+j].bomb==='bomb'){
                            res = res + 1;
                        }
                    }
                }
            }
    
            return res
    
        }
    
        for(let y = 0; y < size; y = y + 1){
            for(let x = 0; x < size; x = x + 1){
                if(grid[y][x].bomb!=='bomb'){
                    grid[y][x].bomb = countCloseBombs(y, x)
                }
            }
        }

        setFinalGrid(grid)

        setIsFail(false)

        setIsUpdate(false)

        setIsSuccess(false)

        clickNum.current = 0

    }, [isUpdate])
    

    const handleFail = () => {
        let grid = finalGrid.map((el)=>[...el])
        for(let y = 0; y < finalGrid.length; y = y + 1){
            for(let x = 0; x < finalGrid.length; x = x + 1){
                grid[y][x].isOpen = true
            }
        }
        setFinalGrid(grid)
        setIsFail(true)
    }

    const recusrionClick = (y, x, grid) => {

        let arr = []

        for(let i = -1; i < 2; i = i + 1){
            for(let j = -1; j < 2; j = j + 1){
                if(grid[y+i] && grid[y+i][x+j] && !grid[y+i][x+j].isOpen){
                    if(grid[y+i][x+j].bomb===0){
                        clickNum.current++
                        grid[y+i][x+j].isOpen = true
                        arr.push([y+i, x+j])
                    }else if(grid[y+i][x+j].bomb!=='bomb'){
                        clickNum.current++
                        grid[y+i][x+j].isOpen = true
                    }
                }
            }
        }

        arr.forEach((coor)=>{
            recusrionClick(coor[0], coor[1], grid)
        })

    }

    const handleClick = (y, x) => {
        let grid = finalGrid.map((el)=>[...el])

        grid[y][x].isOpen = true

        clickNum.current = clickNum.current + 1
        
        if(grid[y][x].bomb === 0){

            recusrionClick(y, x, grid)

        }

        console.log(clickNum)

        if((size*size) - num === clickNum.current){
            setIsSuccess(true)
        }

        setFinalGrid(grid)
        
    }

    return (
        <div>
            {isFail ? 
            <div>
                You Lost!
                <button onClick={()=>{setIsUpdate(true)}}>Try Again</button>
            </div> : null}
            {isSuccess ? 
            <div>
                You Won!
                <button onClick={()=>{setIsUpdate(true)}}>Try Again</button>
            </div> : null}
            <div>
                <button onClick={()=>{setIsSubmit(false)}}>Change Params</button>
            </div>
            {finalGrid.map((rows, index1)=>{

                return (
                    <div key={index1} className={s.rows}>
                        {rows.map((el, index2)=>{
                            if(el.bomb==='bomb'){
                                return (
                                    <div 
                                        key={index1+'_'+index2} 
                                        className={el.isOpen ? s.open+' '+s.bomb : s.bomb}
                                        onClick={()=>handleFail()}>
                                            <div>Bomb</div>
                                    </div>
                                )
                            }else if(el.bomb === 0){
                                return (
                                    <div 
                                        key={index1+'_'+index2} 
                                        className={el.isOpen ? s.zero_element+' '+s.open : s.element}
                                        onClick={()=>{
                                            if(!el.isOpen){
                                                handleClick(index1, index2)
                                        }}}>
                                            <div>{el.bomb}</div>
                                    </div>
                                )
                            }else {
                                return (
                                    <div 
                                        key={index1+'_'+index2} 
                                        className={el.isOpen ? s.element+' '+s.open : s.element}
                                        onClick={()=>{
                                            if(!el.isOpen){
                                                handleClick(index1, index2)
                                        }}}>
                                            <div>{el.bomb}</div>
                                    </div>
                                )
                            }
                            
                        })}
                    </div>
                )

            })}
        </div>
    )

}

export default Minesweeper;