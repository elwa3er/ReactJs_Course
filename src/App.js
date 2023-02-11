import logo from './1560356138333.jpg';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  let photo={src: logo,alt:"thameur ben abdallah"}
  return (
    <div>
      
        {/* <ProfilePhoto src={photo.src} alt = {photo.alt}></ProfilePhoto> */}
        <ProfilePhoto {...photo}></ProfilePhoto>
        <FullName name="Thameur Ben Abdallah"></FullName>
        <Address></Address>
        
    
    </div>
  );
}

export default App;
