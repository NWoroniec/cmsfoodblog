import React from "react";

function Recipies ({recipies, images}) {
    return (
        
        <ul class="list-group">{recipies.map((recipe) => (
            <div key={recipe.sys.id}>
            <li class="list-group-item">{recipe.fields.header}</li>
            <li class="list-group-item">{recipe.fields.description}</li>
            <div class="container">{recipe.fields.ingridientTable.content.map((ingridient) =>(
                <div>
                {ingridient.content.map((ingridient) => (
                    <li class="list-group-item">
                        {ingridient.value}
                    </li>
                ))}
                </div>


            ))}</div>
            <li class="list-group-item">{images.map((image) => (
                image.fields.title == recipe.fields.header &&
                <img key={image.sys.id} src={image.fields.file.url}/>
            ))}</li>
            </div>
        ))}
        </ul>
        
        
    )
}

export default Recipies;