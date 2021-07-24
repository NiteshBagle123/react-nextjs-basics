import Link from 'next/link';
const NewsPage = () => {
    return (
        <div>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJS is a great react framework
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default NewsPage;