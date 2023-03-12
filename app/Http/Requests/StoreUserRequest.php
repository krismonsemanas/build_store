<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users,username|alpha_dash',
            'password' => 'required|min:8|confirmed',
            'email' => 'required|email|unique:users,email',
            'avatar' => 'nullable|max:2048|image|mimes:png,jpg',
            'address' => 'nullable|string|max:255'
        ];
    }
}
