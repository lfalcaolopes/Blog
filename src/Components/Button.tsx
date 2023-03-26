function Button({ text }: { text: string }) {
  return (
    <button className="bg-custom-blue p-4 rounded-md text-white sub-heading2" type="submit">
      {text}
    </button>
  );
}

export default Button;
