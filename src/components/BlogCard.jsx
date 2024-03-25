import { Link } from "react-router-dom";
import placeholder from '../assets/404.jpg';

const Blog = ({blog}) => {
    const {cover_image, description, published_at, title, id}= blog;
    return (
        <div className="border rounded-lg">
            <Link to={`/blog${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholder} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-black">{new Date (published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;