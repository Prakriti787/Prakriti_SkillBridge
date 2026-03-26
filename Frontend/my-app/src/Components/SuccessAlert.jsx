export default function SuccessAlert({ message }) {
  return (
    <div className="w-full bg-green-500 text-white text-center py-2 rounded">
      {message}
    </div>
  );
}
