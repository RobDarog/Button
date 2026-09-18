import { Button } from './components/Button/Button';

const IconDot = () => <span className="block h-2.5 w-2.5 rounded-full bg-white" />;

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-xl font-semibold text-gray-800">Button — design system component</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button type="primary" icon={<IconDot />}>
          Primary
        </Button>
        <Button type="secondary">Secondary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="primary" state="disabled" icon={<IconDot />}>
          Disabled
        </Button>
      </div>
      <p className="text-sm text-gray-400">Run `npm run storybook` to see every variant &amp; state.</p>
    </div>
  );
}

export default App;
