
import { useParams } from 'react-router-dom';
const Questions = () => {

    const { disease } = useParams();
    return (
        <>
            <h1>This is Question Page for {disease}</h1>
        </>
    );
};

export default Questions;