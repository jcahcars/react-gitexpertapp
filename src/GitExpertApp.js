import React,{ useState }  from "react";
import {AddCategory}  from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


export const GitExpertApp=()=>{
 //const categories=['One punch','Samurai X','Dragon Ball'];

const [categories, setCategories] = useState(['One punch']);

// const addCategories=()=>{
//     setCategories([...categories,'Pokemon']);
// }


    return (
        <>       
         <h1>GitExportApp</h1>
         <AddCategory setCat={setCategories}/>
         <hr/>

          <ol>
            {
                categories.map(category=>
                   <GifGrid 
                        key={category}
                        category={category}
                   />
                )
            }

          </ol>


        </>
    )
}