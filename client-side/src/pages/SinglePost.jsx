import React from "react";
import {Link} from "react-router-dom"
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="info">
            <span>Benard</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=2'}>
            <img src={Edit}alt="edit-button" />
            </Link>
            <img src={Delete} alt="delete-button" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ullam fuga suscipit consectetur dolore nobis inventore cum officia, magni praesentium ab! Corporis qui optio repellat debitis voluptatem iusto accusantium laboriosam.
        Quia modi tempore hic provident unde est, earum pariatur. Id sint voluptas architecto doloribus fuga facilis in. Voluptatem fuga quisquam, maxime minus illum, facilis placeat optio nihil numquam, libero cupiditate.
        Totam similique atque ratione quae in amet, quo dicta consectetur corporis culpa repellendus asperiores tempore eveniet blanditiis magnam eligendi ad voluptatum excepturi suscipit odio autem voluptas ex adipisci expedita. Possimus?
        <br />
        <br />
        Praesentium dicta, eaque voluptatem, beatae quis corporis fugiat esse architecto, explicabo asperiores laborum. Blanditiis ab eius rerum voluptates, voluptatibus a incidunt enim debitis et, molestiae tempora possimus saepe placeat temporibus.
        Quisquam, doloremque reprehenderit quibusdam dolorum labore veniam, commodi, qui consequatur obcaecati voluptatem quis cum minima distinctio impedit soluta dolor eum quam dolorem a! Dolor fugit molestiae dolore esse repudiandae! Asperiores.
        Dolores voluptatibus ad exercitationem quia culpa saepe debitis nesciunt! Iste fugit dolorem et magnam dolor culpa consequatur, harum totam perferendis veniam, voluptas, incidunt voluptatum at! Eius fugit modi quae minus?
        Nemo nam doloribus similique illum pariatur. Maxime nihil officiis consequuntur incidunt? Voluptate tempore dolorum ratione, cupiditate distinctio nesciunt facere pariatur labore atque alias, nostrum laboriosam molestias iure, dolore odit suscipit!
        <br />
        <br />
        Ipsam vero eaque ratione soluta ullam ex quibusdam quisquam nisi fuga! Excepturi cumque ullam iste cum ipsam fugiat quas corrupti repellendus deleniti quisquam vitae atque quaerat nam, voluptates aliquam ratione!
        Sapiente animi maxime iure repellendus sequi, cum assumenda perspiciatis culpa mollitia, ipsum ipsam! Magnam officia omnis harum nemo, rem voluptate consequuntur architecto recusandae quas exercitationem culpa itaque totam corrupti labore.
        Ratione natus cum dolore enim eligendi tempora, dignissimos nostrum ducimus, omnis quis ipsam, ipsa repudiandae dolores iusto officiis placeat amet? Vel cumque illum delectus rerum culpa facilis tempora, voluptatem harum!</p>
      </div>
     <Menu />
    </div>
  );
};

export default SinglePost;
