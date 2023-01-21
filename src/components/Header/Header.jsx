import "./Header.scss";

export const Header = () => {
  return (
    <header className="Header">
      <div className="main">
        <div className="main-body">
          <h1>Client-First helps us develop organized websites in Webflow</h1>
          <p>
            Client-First is a set of guidelines and strategies to help us build
            Webflow websites. Built and managed <a href="#">by Finsweet</a>.
          </p>
        </div>
        <div className="main-button">Learn Client-First with docs <img src="/images/icon-arrow-up-left.svg" alt="arrow-up-left" /></div>
      </div>
      <div className="dashboard-header">
        <img src="/images/webflow-navigator.png" alt="webflow navigator" />
        <img src="/images/webflow-dashboard.png" alt="webflow dashboard" />
        <img src="/images/webflow-designer.png" alt="webflow designer" />
      </div>
    </header>
  );
};
