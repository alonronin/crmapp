# SaaS CRM Application Specification

## Project Overview
- **Project Name**: Nexus CRM
- **Type**: Single Page Application (SPA)
- **Core Functionality**: A modern, intuitive customer relationship management system for managing contacts, companies, deals, and tasks
- **Target Users**: Small to medium businesses seeking a lightweight CRM solution

## Technical Stack
- React 18 (via CDN)
- React-DOM (via CDN)
- TailwindCSS (via CDN)
- Babel standalone for JSX transformation
- Single HTML file architecture

## Visual & UI Specification

### Layout Structure
- **Sidebar Navigation**: Fixed left sidebar with logo, navigation items, and user profile
- **Main Content Area**: Dynamic content area with header and main dashboard
- **Responsive Design**: Collapsible sidebar for mobile, fluid layouts for desktop

### Color Palette
- **Primary**: Deep indigo (#4F46E5)
- **Secondary**: Slate gray (#64748B)
- **Accent**: Emerald (#10B981)
- **Background**: Cool gray (#F8FAFC)
- **Surface**: White (#FFFFFF)
- **Text Primary**: Slate 900 (#0F172A)
- **Text Secondary**: Slate 500 (#64748B)
- **Success**: Green (#22C55E)
- **Warning**: Amber (#F59E0B)
- **Danger**: Red (#EF4444)

### Typography
- **Font Family**: Inter (Google Fonts) with system fallbacks
- **Headings**: Bold weight, tracking tight
- **Body**: Regular weight, comfortable line height

### Visual Style
- Modern, clean interface with subtle shadows
- Card-based layout for data presentation
- Soft rounded corners (rounded-lg to rounded-xl)
- Subtle hover states and transitions
- Gradient accents on primary CTAs

## Feature Specification

### 1. Dashboard
- Key metrics cards (Total Contacts, Active Deals, Tasks Due, Revenue)
- Recent activity feed
- Quick action buttons
- Pipeline overview chart (visual representation)

### 2. Contacts Management
- Contact list with search and filter
- Contact cards showing name, email, company, status
- Add/Edit contact modal
- Contact details view
- Status badges (Lead, Customer, Churned)

### 3. Companies Management
- Company directory with search
- Company cards showing name, industry, contacts count
- Add/Edit company modal
- Company details with associated contacts

### 4. Deals/Pipeline
- Kanban-style deal board
- Deal stages: Lead, Qualified, Proposal, Negotiation, Won, Lost
- Drag-and-drop functionality (visual feedback)
- Deal cards with value, contact, probability
- Add/Edit deal modal
- Deal value totals per stage

### 5. Tasks
- Task list with priority indicators
- Due date tracking
- Task completion toggle
- Add/Edit task modal
- Filter by status (Pending, Completed, Overdue)

### 6. Navigation
- Dashboard
- Contacts
- Companies
- Deals
- Tasks
- Settings (placeholder)

## Data Management
- Local state management with React hooks
- Mock data for demonstration
- CRUD operations on contacts, companies, deals, tasks
- UUID generation for new records

## Interaction Specification

### Animations
- Smooth page transitions
- Hover effects on cards and buttons
- Modal fade-in/scale animation
- Staggered list animations

### Feedback
- Toast notifications for actions
- Loading states
- Empty states with illustrations
- Confirmation dialogs for destructive actions

## Component Library

### Sidebar
- Logo with app name
- Navigation items with icons
- Active state highlighting
- User avatar and name

### Cards
- MetricCard: Icon, label, value, trend indicator
- ContactCard: Avatar, name, email, company, status
- CompanyCard: Logo, name, industry, contacts count
- DealCard: Title, value, contact, stage badge
- TaskCard: Title, due date, priority badge, checkbox

### Modals
- Add/Edit Contact Modal
- Add/Edit Company Modal
- Add/Edit Deal Modal
- Add/Edit Task Modal
- Confirmation Dialog

### Forms
- Input fields with labels
- Select dropdowns
- Date pickers
- Textareas
- Submit/Cancel buttons

## Acceptance Criteria
1. All navigation links work and display correct content
2. Dashboard shows accurate metrics based on data
3. CRUD operations work for all entities
4. Modals open/close properly with correct forms
5. Search and filter functionality works
6. Visual design matches specification
7. Responsive behavior on different screen sizes
8. No console errors on load
9. Smooth animations and transitions
