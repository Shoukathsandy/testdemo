import "./App.css";
export default function App() {
  const users = [
    {
      profile: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/janhvi-kapoor-main_3_0.jpg",
      name: "Faruq"
    },
    {
      profile: "https://pbs.twimg.com/media/EVJHeJEUEAIJfRW.jpg",
      name: "shoukath"
    },
    {
      profile: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/janhvi-kapoor-main_3_0.jpg",
      name: "farin"
    }
  ];
  return (
    <div className="App">
      {/* return ( */}
{users.map((usr) => (
        <Welcome name={usr.name} profile={usr.profile} />
      ))}
    </div>
  );
}
function Welcome({ name, profile }) {
  return (
    <div className="welcome">
      <img className="profile-pic" src={profile} alt="name" />
      <h1>Hell0,{name}🎆🎊🎇🎉❤️</h1>
    </div>
  );
}

