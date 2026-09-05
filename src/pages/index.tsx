import "../App.css";
export default function Index() {
  return (
    <div className="p-4 flex flex-row w-full justify-center-safe">
      <nav className="">
        <ul className="flex flex-row gap-7">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Workplace</li>
        </ul>
      </nav>
      <img src="digitalsolutionlogo.png" width="150" height="auto"></img>
      <div>
        <a href="#">Get Started</a>
      </div>
    </div>
  );
}
