import React from "react";
import { Link } from "react-router-dom";

function Recipies({ recipies, images, testfunc }) {
  return (
    <ul className="list-group" id="bootstrap-overrides">
      {recipies.map((recipe) => (
        <div key={recipe.sys.id}>
          <Link to={recipe.fields.slug} onClick={testfunc} className="link-secondary">
            <li className="list-group-item">
              <h1>{recipe.fields.header}</h1>
            </li>
            <li className="list-group-item">
              {images.map(
                (image) =>
                  image.fields.title == recipe.fields.header && (
                    <img key={image.sys.id} src={image.fields.file.url} id="thumbs"/>
                  )
              )}
            </li>
          </Link>
        </div>
      ))}
    </ul>
  );
}

export default Recipies;
