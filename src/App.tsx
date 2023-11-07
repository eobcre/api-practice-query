import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import User from './components/User';
import Button from './components/Button';

const queryClient = new QueryClient();

const App = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const handleClickToggle = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <QueryClientProvider client={queryClient}>
          <Button onClick={handleClickToggle} />
          <div>{toggleButton && <User />}</div>
    </QueryClientProvider>
  );
};

export default App;
