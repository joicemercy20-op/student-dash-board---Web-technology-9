import React, { useState } from "react";
import "./App.css";

function Header({ title, darkMode, toggleTheme }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">STUDENT PORTAL</p>
        <h2>{title}</h2>
      </div>
      <button className="theme-button" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

function Sidebar({ activePage, setActivePage }) {
  const pages = [
    ["Dashboard", "▦"],
    ["Courses", "📚"],
    ["Assignments", "📝"],
    ["Profile", "👤"]
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">S</div>
        <div><h2>Student Portal</h2><span>Learning space</span></div>
      </div>
      <p className="nav-label">MENU</p>
      <nav>
        {pages.map(([page, icon]) => (
          <button
            key={page}
            className={activePage === page ? "nav-button active" : "nav-button"}
            onClick={() => setActivePage(page)}
          >
            <span className="nav-icon">{icon}</span>{page}
          </button>
        ))}
      </nav>
      <div className="sidebar-note">
        <span>💡</span>
        <strong>Keep learning!</strong>
        <p>Small steps every day lead to big results.</p>
      </div>
    </aside>
  );
}

function StatCard({ title, value, icon, note }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-icon">{icon}</span>
        <span className="stat-note">{note}</span>
      </div>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <section className="welcome">
        <div>
          <p className="eyebrow">YOUR OVERVIEW</p>
          <h1>Welcome Back, Student! 👋</h1>
          <p>Here is your academic overview. Keep up the great work.</p>
        </div>
        <div className="welcome-art">🎓</div>
      </section>
      <div className="stats">
        <StatCard title="Courses" value="06" icon="📚" note="Enrolled" />
        <StatCard title="Assignments" value="12" icon="📝" note="This term" />
        <StatCard title="Completed" value="09" icon="✅" note="75% done" />
        <StatCard title="Attendance" value="92%" icon="📅" note="Good" />
      </div>
      <section className="content-card">
        <div className="section-heading">
          <div><p className="eyebrow">STAY UPDATED</p><h2>Recent Activities</h2></div>
          <span className="live-pill">● Latest</span>
        </div>
        <div className="activity"><span className="activity-check">✓</span><div><strong>Completed ReactJS assignment</strong><p>Web Technologies · Today</p></div></div>
        <div className="activity"><span className="activity-check">✓</span><div><strong>Attended Database Management class</strong><p>Database Management · Yesterday</p></div></div>
        <div className="activity"><span className="activity-check">✓</span><div><strong>Submitted Java programming task</strong><p>Java Programming · 2 days ago</p></div></div>
      </section>
    </>
  );
}

function Courses() {
  const courses = [
    { name: "ReactJS Development", code: "CS301", progress: 80 },
    { name: "Database Management", code: "CS302", progress: 65 },
    { name: "Java Programming", code: "CS303", progress: 90 },
    { name: "Web Technologies", code: "CS304", progress: 75 }
  ];
  return (
    <>
      <div className="page-intro"><p className="eyebrow">LEARNING</p><h1>My Courses</h1><p>View your enrolled courses and learning progress.</p></div>
      <div className="course-grid">
        {courses.map(course => (
          <div className="content-card course-card" key={course.code}>
            <div className="course-symbol">📘</div>
            <h3>{course.name}</h3>
            <p>Course Code: {course.code}</p>
            <div className="progress-label"><strong>{course.progress}%</strong><span>Completed</span></div>
            <div className="progress-track"><div style={{ width: `${course.progress}%` }} /></div>
          </div>
        ))}
      </div>
    </>
  );
}

function Assignments() {
  const tasks = [
    { name: "ReactJS UI Design", due: "05 November 2026", status: "Completed" },
    { name: "SQL Queries", due: "07 November 2026", status: "Pending" },
    { name: "Java Programming", due: "10 November 2026", status: "Pending" },
    { name: "Web Development", due: "12 November 2026", status: "Completed" }
  ];
  return (
    <>
      <div className="page-intro"><p className="eyebrow">YOUR TASKS</p><h1>My Assignments</h1><p>Track your assignment deadlines and status.</p></div>
      <section className="content-card">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <div className="task-symbol">📄</div>
            <div className="task-info"><h3>{task.name}</h3><p>Due Date: {task.due}</p></div>
            <span className={task.status === "Completed" ? "status completed" : "status pending"}>{task.status}</span>
          </div>
        ))}
      </section>
    </>
  );
}

function Profile() {
  return (
    <>
      <div className="page-intro"><p className="eyebrow">ACCOUNT</p><h1>Student Profile</h1><p>Your academic information.</p></div>
      <section className="content-card profile">
        <div className="avatar">S</div>
        <h2>Student Name</h2>
        <p className="muted">student@example.com</p>
        <hr />
        <div className="profile-row"><span>Department</span><strong>Computer Science</strong></div>
        <div className="profile-row"><span>Year</span><strong>Third Year</strong></div>
        <div className="profile-row"><span>Student ID</span><strong>STU2026</strong></div>
        <div className="profile-row"><span>Attendance</span><strong>92%</strong></div>
      </section>
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  function renderPage() {
    switch (activePage) {
      case "Courses": return <Courses />;
      case "Assignments": return <Assignments />;
      case "Profile": return <Profile />;
      default: return <Dashboard />;
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        <Header
          title="Student Dashboard"
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
        {renderPage()}
        <footer>© 2026 Student Portal · Built with ReactJS</footer>
      </main>
    </div>
  );
}
