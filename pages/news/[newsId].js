import { useRouter } from 'next/router';

const SomethingImportant = () => {
    const router = useRouter();

    const { query : { newsId }} = router;
    
    return (
        <div>
            <h1>{newsId}</h1>
        </div>
    );
}

export default SomethingImportant;