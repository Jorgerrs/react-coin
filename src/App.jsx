import { Outlet, NavLink } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/favorites">Favoritos</NavLink></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {}
    </div>
  );
}