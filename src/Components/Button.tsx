function Button({ text }: { text: string }) {
  return (
    <button className="bg-custom-blue p-4 rounded-md text-white parag-bold" type="submit">
      {text}
    </button>
  );
}

export default Button;
