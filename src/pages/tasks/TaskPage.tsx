import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import jsonData from './data/tasks.json';

export default function TaskPage() {
  const tasks = jsonData;

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 py-6 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
