export function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-sm font-medium text-slate-300">
            há 2 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate ab autem molestias laborum enim molestiae neque vel mollitia voluptatum. Ipsum animi id provident ut, quam delectus excepturi molestiae possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident repellendus quibusdam quo. Id, quasi pariatur! Culpa ad eos iure laudantium, tempore, quia facere, eveniet repudiandae laboriosam nihil alias dolore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa id dicta ducimus, ex ad quasi ut esse obcaecati, unde minima nobis. Porro minus rerum incidunt voluptates hic recusandae magnam nihil?
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    )
}