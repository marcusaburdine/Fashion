import { Link } from "react-router-dom"
import imgOne from "./blog-image-1.jpg"
import imgTwo from "./blog-image-2.jpg"
export default function Article() {
    return (
       
        <main>
            <article>
                <div class="date">11/12/22</div>
                <h3>On the Street in Brooklyn</h3>
                <img src={imgOne} alt="img-1" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati eveniet incidunt aliquid eos minima perspiciatis excepturi tempore laudantium, culpa hic porro voluptate cumque sed quia cum, sunt recusandae. Veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident modi, labore nihil harum dolores ipsa sit consequuntur dignissimos distinctio dolor quod hic quos numquam. Voluptas, quibusdam! Culpa, tempore minima?</p>
                <div class="display">
                <Link to="/" className="continue" >Continues ...</Link>
                </div>
            </article>
            <article>
                <div class="date">11/11/22</div>
                <h3>Vintage in Vogue</h3>
                <img src={imgTwo} alt="img-2" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, exercitationem hic odio iste deserunt aperiam, voluptatibus consequuntur dolor quos iure in voluptas possimus molestiae. Sapiente adipisci illo alias delectus? Facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur a velit saepe temporibus, illum delectus assumenda. Quas, non totam? Totam necessitatibus reiciendis voluptatem consectetur eum voluptatibus est, quaerat temporibus officiis. </p>
                <div class="display">
                <Link to="/" className="continue" >Continues ...</Link>
                </div>
            </article>
        </main>
    )
}