import React, { useEffect, useState } from 'react';

import s from './Minesweeper.module.css'

const Minesweeper = ({width, height, coords}) => {

    let [isFail, setIsFail] = useState(false)

    let [finalGrid, setFinalGrid] = useState([])

    useEffect(()=>{

        let temp = []

        let grid = []

        for(let y = 0; y < height; y = y + 1){
            for(let x = 0; x < width; x = x + 1){
                temp.push({bomb: 0, isOpen: false})
            }
            grid.push(temp)
            temp = []
        }
    
        for(let i = 0; i < coords.length; i = i + 1){
            grid[coords[i][0]][coords[i][1]].bomb = 'bomb'
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
    
        for(let y = 0; y < height; y = y + 1){
            for(let x = 0; x < width; x = x + 1){
                if(grid[y][x].bomb!=='bomb'){
                    grid[y][x].bomb = countCloseBombs(y, x)
                }
            }
        }

        setFinalGrid(grid)

    }, [])
    

    const handleFail = () => {
        setIsFail(true)
    }

    const handleClick = (y, x) => {
        let grid = []
        if(finalGrid[y][x].bomb === 0){
            for(let i = 0; i < 3; i = i + 1){
                for(let j = 0; j < 3; j = j + 1){
                    if(finalGrid[y-1+i] && finalGrid[y-1+i][x-1+j] && finalGrid[y-1+i][x-1+j].bomb!=='bomb'){
                        grid = finalGrid.map((el)=>[...el])
                        grid[y-1+i][x-1+j].isOpen = true
                        setFinalGrid(grid)
                    }
                }
            }
        }else{
            grid = finalGrid.map((el)=>[...el])
            grid[y][x].isOpen = true
            setFinalGrid(grid)
        }
        
    }

    return (
        <div>
            {isFail ? <div>You Lost!</div> : null}
            {finalGrid.map((rows, index1)=>{

                return (
                    <div key={index1} className={s.rows}>
                        {rows.map((el, index2)=>{
                            if(el.bomb==='bomb'){
                                return (
                                    <div 
                                        key={index1+'_'+index2} 
                                        className={el.isOpen ? s.open+' '+s.bomb : s.bomb}
                                        onClick={handleFail}>
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
                                                console.log('AAA')
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
                                                console.log('AAA')
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