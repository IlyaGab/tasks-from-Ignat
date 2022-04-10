import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number
    name:string
    priority:string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs:Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'low') return affairs.filter((el)=> el.priority === 'low')
    if (filter === 'middle') return affairs.filter((el)=> el.priority === 'middle')
    if (filter === 'high') return affairs.filter((el)=> el.priority === 'high')
    return affairs

}
export const deleteAffair = (affairs: Array<AffairType>, newID: number): Array<AffairType> => { // need to fix any
    return affairs.filter((el) => el._id !== newID)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) //
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (newID:number) => setAffairs(deleteAffair(affairs,newID))

    return (
        <div>
            <hr/>
            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
