import { Counter } from './components/Counter';
import { RepositoryList } from './components/RspositoryList';
import './styles/global.scss';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}