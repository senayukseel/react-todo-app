import { Sun, Moon} from "lucide-react";
import { useEffect, useState} from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  // save theme to local storage whenever they change
  useEffect(() =>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark"){
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };  
  
  return <button className="p-3 sm:p-4 rounded-2xl bg-purple-600 text-white
  dark:bg-yellow-500 dark:text-gray-900 transition-colors"
    onClick={toggleTheme}>
    {isDark ? <Moon/> : <Sun/>}</button>;
};

export default ToggleTheme;
