# Orbit

Orbit is a modern team collaboration platform built with React, TypeScript, and Tailwind CSS. It provides project and task management features for teams, including dashboards, user profiles, and admin controls.

## Features

- **Dashboard:** Overview of projects, tasks, and team activity.
- **Projects:** Create, view, edit, and manage projects with details and associated tasks.
- **Tasks:** Assign, track, and filter tasks by status, priority, category, and project.
- **User Management:** Profile and settings for users; admin controls for user and security management.
- **Responsive UI:** Built with Tailwind CSS for a clean, adaptive interface.
- **Data Table:** Sort, filter, paginate, and customize columns for project and task lists.
- **Status Badges & Actions:** Visual status indicators and contextual actions for each row.
- **Routing:** Nested routes using React Router v6.
- **Type Safety:** All data models and schemas are strongly typed with Zod and TypeScript.

## Tech Stack

- **React** (v18+)
- **TypeScript**
- **Tailwind CSS**
- **React Router v6**
- **Zod** (for schema validation)
- **shadcn/ui** (for all ui components)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/krishnapramodaradhi/orbit.git
cd orbit
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
  components/
    shared/         # Reusable UI components (SideNav, DataTable, etc.)
    projects/       # Project-specific components and columns
    tasks/          # Task-specific components and columns
  pages/
    projects/       # Project list and details pages
    tasks/          # Task list and details pages
    user/           # User profile and settings
    Dashboard.tsx   # Main dashboard
    NotFound.tsx    # 404 page
  schemas/          # Zod schemas for data validation
  data/             # Sample data for projects and tasks
  App.tsx           # Main app entry point
  components/Layout.tsx # Layout with sidebar and main content
```

## Usage

- **Projects:** View all projects, see details, and manage associated tasks.
- **Tasks:** Filter, sort, and manage tasks across projects.
- **User:** Update profile and settings.
- **Admin:** Manage users and security (if enabled).

## Customization

- **Add columns:** Edit `src/components/projects/Columns.tsx` or `src/components/tasks/Columns.tsx`.
- **Change theme:** Update Tailwind config or use the theme switcher in the sidebar.
- **Add sample data:** Edit `src/data/project.ts` and `src/data/task.ts`.

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

MIT

---
