export default function DashboardCards({ name, icon, navManageMovies }) {
  return (
    <div class="dash-container">
      <a href="" onClick={navManageMovies}>
        <div class="icon-container">
          <div class="movie-icon">
            <img src={icon} alt="Movies" className="dashboard-icons" />
          </div>
          <h2 className="dashboard-options-text">{name}</h2>
        </div>
      </a>
    </div>
  );
}
