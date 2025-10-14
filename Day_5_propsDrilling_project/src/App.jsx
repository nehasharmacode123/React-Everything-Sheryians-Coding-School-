import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  // const arr = [
  //   { 
  //     user: "Sarthak",
  //     age: 20
  //   },
  //   { 
  //     user: "neha",
  //     age: 50
  //   },
  //   { 
  //     user: "chutki",
  //     age: 70
  //   }
  // ];

  // learning example 
  // const obj = {
  //   user: 'Sarthak',
  //   age:40
  // }

  // console.log(obj.age);

  // forEach -> for iteration
  // map -> for return
  // arr.forEach((elem)=>{
  //   console.log(elem);

  // })

  // arr.map((elem)=>{
  //   console.log(elem.user);
  //   console.log(elem.age);
    
  // })

  // console.log(arr);

  // const obj = {
  //   name: "neha",
  //   age: 54
  // }

 const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag: "Full-time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Research Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag: "Part-time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Mumbai, India"
  }
];

// console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map((elem,idx)=>{
        // console.log(idx);
        
        // return <h1>{elem.companyName}</h1>
        return <div key={idx}>
          <Card key={idx} brandLogo={elem.brandLogo} companyName={elem.companyName} post={elem.post} tag1={elem.tag1} datePosted={elem.datePosted} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}

      {/* 
      <User name={arr[0]} />
      <User name={obj.name} />
      <User name={arr[1]} />
      <User name={obj.age} /> */}

      {/* Use map method for array */}
      {/* {arr.map((elem)=>{
          return <h1>{elem/2}</h1>;
        })} */}

        {/* {arr.map((elem)=>{
          // return <h1>{elem}</h1>
          return <User name={elem} />
        })} */}
    </div>
  );
};

export default App;
