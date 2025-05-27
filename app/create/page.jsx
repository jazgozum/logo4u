// app/create/page.jsx
import React, { Suspense } from 'react';
import CreateLogo from './CreateLogo';
import { Loader2Icon } from 'lucide-react';

export default function Page() {
  return (
    <main>
      <Suspense fallback={ <div className='items-center flex justify-center'><Loader2Icon className='animate-spin text-primary w-10 h-10 mt-5'/></div>}>
        <CreateLogo />
      </Suspense>
    </main>
  );
}
