import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { UserProvider } from './pages/UserContext'; 
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
// Import recipe management components
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import CreateRecipe from './pages/CreateRecipe';
import EditRecipe from './pages/EditRecipe';
// Import group management components
import AllGroups from './components/AllGroups';
import MyGroups from './components/MyGroups';
import ManagedGroups from './components/ManagedGroups';
import GroupDetail from './components/GroupDetail';
import CreateGroup from './components/CreateGroup';
import EditGroup from './components/EditGroup';
import CreateDiscussion from './components/CreateDiscussion';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePost />} />
        {/* Recipe Management Routes */}
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/create" element={<CreateRecipe />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        {/* Community Group Management Routes */}
        <Route path="/groups" element={<AllGroups />} />
        <Route path="/groups/my-groups" element={<MyGroups />} />
        <Route path="/groups/managed" element={<ManagedGroups />} />
        <Route path="/groups/create" element={<CreateGroup />} />
        <Route path="/groups/:groupId" element={<GroupDetail />} />
        <Route path="/groups/:groupId/edit" element={<EditGroup />} />
        <Route path="/groups/:groupId/discussions/create" element={<CreateDiscussion />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
