import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import MiniDashboard from './MiniDashboard';

export default function NestedRoutesExample() {
  const [state, setState] = useState();
  const currentHeight = window.innerHeight / 2 - 100;

  return (
    <div id='scrollArea' className='bg-green-900' style={{ height: 2500 }}>
      <div className='flex justify-center mt-6 ' style={{ height: 500 }}>
        <div>
          <div className='text-7xl text-white font-bold'>
            Remix has a cheat code:
          </div>
          <div className='text-7xl text-yellow-500 font-bold'>
            Nested Routes.
          </div>
          <div className='text-7xl text-white font-bold'>↑↑↓↓←→←→BA</div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <Waypoint
          onEnter={(e) => {
            setState('domain');
          }}
          topOffset={currentHeight}
          bottomOffset={currentHeight}
        >
          <div
            className='text-7xl text-white font-bold w-2/4 pb-44 bg-blue-500'
            style={{ height: 850 }}
            id='section-domain'
          >
            Websites usually have levels of navigation that control child views.
          </div>
        </Waypoint>
        <Waypoint
          onEnter={(e) => {
            setState('subdomain');
          }}
          topOffset={currentHeight}
          bottomOffset={currentHeight}
        >
          <div
            className='text-7xl text-white font-bold w-2/4 pb-44 bg-green-500'
            id='section-subdomain'
            style={{ height: 850 }}
          >
            Not only are these components pretty much always coupled to URL
            segments...
          </div>
        </Waypoint>
        <Waypoint
          onEnter={(e) => {
            setState('module');
          }}
          topOffset={currentHeight}
          bottomOffset={currentHeight}
        >
          <div
            className='text-7xl text-white font-bold w-2/4 pb-44 bg-yellow-500'
            id='section-module'
            style={{ height: 850 }}
          >
            ...they’re also the semantic boundary of data loading and code
            splitting.
          </div>
        </Waypoint>
        <Waypoint
          onEnter={(e) => {
            setState('id');
          }}
          topOffset={currentHeight}
          bottomOffset={currentHeight}
        >
          <div
            className='text-7xl text-white font-bold w-2/4 pb-44 bg-red-600'
            id='section-id'
            style={{ height: 850 }}
          >
            Hover or tap the buttons to see how they’re all related
          </div>
        </Waypoint>
        <div className='flex'>
          <button
            className='rounded-lg bg-blue-500 text-blue-900 p-1 mr-2'
            onClick={() => setState('domain')}
          >{`<Root>`}</button>
          <button
            className='rounded-lg bg-green-500 text-green-900 p-1 mr-2'
            onClick={() => setState('subdomain')}
          >{`<Sales>`}</button>
          <button
            className='rounded-lg bg-yellow-500 text-yellow-900 p-1 mr-2'
            onClick={() => setState('module')}
          >{`<Invoices>`}</button>
          <button
            className='rounded-lg bg-red-500 text-red-900 p-1 mr-2'
            onClick={() => setState('id')}
          >{`<Invoice id={id}>`}</button>
        </div>
        <MiniDashboard state={state}></MiniDashboard>
      </div>
    </div>
  );
}
