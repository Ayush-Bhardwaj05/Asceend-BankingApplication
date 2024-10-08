import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
  const loggedIn = { firstName: "Ayush" ,lastName:"Bhardwaj", email:"ayush@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and transactions efficiently"
            user={loggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[]}
      
      />
    </section>
  );
};

export default Home;
