import "./Goals.scss";

export const Goals = () => {
  const goals = [
    {
      icon: "icon-green-box",
      content: "1. Create a project organization system.",
    },
    {
      icon: "icon-yellow-arrow",
      content: "2. Work faster in Webflow, with less effort.",
    },
    {
      icon: "icon-blue-folder",
      content: "3. Define a class strategy for the project.",
    },
    {
      icon: "icon-purple-box",
      content: "4. Standardize processes across pages.",
    },
    {
      icon: "icon-red-box",
      content: "5. Build scalable, manageable projects.",
    },
    {
      icon: "icon-bulb",
      content: "6. Unify a build strategy as a team.",
    },
  ];

  return (
    <div className="Goals">
      <div className="content">
        <h3 className="title">Goals of Client-First</h3>
        <div className="content-section">
          <div className="goals-list">
            {goals.map((goal) => (
              <div className="goals-list-item">
                <img
                  src={`/images/${goal.icon}.svg`}
                  alt="goal.icon"
                  className="icon"
                />
                <p className="description">{goal.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="separator">
        <img src="/images/triangle-top.svg" alt="separator" />
      </div>
    </div>
  );
};
