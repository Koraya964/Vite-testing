

export function MyButton({count , onClick}) {
    return (
        <button onClick={onClick} className="bg-black text-white p-2 rounded cursor-pointer transition hover:bg-slate-500 hover:text-black">
            Cliqué {count} fois
        </button>
    );
}