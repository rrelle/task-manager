export default function TaskStats({ total, completed, onClear }) {
    return (
        <div className="mt-4 bg-black p-4 rounded-xl shadow-lg text-center">
            <p>Total:{total}</p>
            <p>Completed:{completed}</p>
            <button onClick={onClear} className="mt-2">
                Clear Completed
            </button>
        </div>
    );
}