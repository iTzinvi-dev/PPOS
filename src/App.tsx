import './App.css';
import Desktop from './components/os/Desktop';
import ErrorBoundary from './components/os/ErrorBoundary';

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <Desktop />
            </ErrorBoundary>
        </div>
    );
}

export default App;
