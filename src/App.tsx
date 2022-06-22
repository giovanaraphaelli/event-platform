import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Video } from './components/Video';
import { Lesson } from './components/Lesson';
import { Event } from './pages/Event';
import { client } from './lib/apollo';

function App() {
  return <Event />;
}
export default App;
