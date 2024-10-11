const Register = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Ro'yxatdan o'tish</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ro'yxatdan o'tish orqali bizning platformamizdan foydalanish
        imkoniyatiga ega bo'lasiz. Iltimos, quyidagi ma'lumotlarni to'ldiring:
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Ism:
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ismingizni kiriting"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email manzilingizni kiriting"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Parol:
          </label>
          <input
            type="password"
            id="password"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Parolingizni kiriting"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Parolni tasdiqlang:
          </label>
          <input
            type="password"
            id="confirmPassword"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Parolingizni tasdiqlang"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Ro'yxatdan o'tish
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Avvaldan ro'yxatdan o'tganmisiz?{" "}
        <a href="/login" className="text-blue-500 underline">
          Kirish
        </a>
      </p>
    </div>
  );
};

export default Register;
