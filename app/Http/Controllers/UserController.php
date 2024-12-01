<?php

namespace App\Http\Controllers;

use App\Enums\PermissionsEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        if ($request->user()->hasPermissionTo(PermissionsEnum::LIST_USERS)) {
            abort(403);
        }

        return Inertia::render('Admin/User/Index', [
            'users' => User::with('permissions')->with('roles')->get(),
        ]);
    }

    public function show(Request $request, User $user): Response
    {
        if ($request->user()->hasPermissionTo(PermissionsEnum::LIST_USERS)) {
            abort(403);
        }

        return Inertia::render('Admin/User/Show', [
            'user' => $user->load('roles')->load('permissions'),
        ]);
    }

    public function create(Request $request): Response
    {
        if ($request->user()->hasPermissionTo(PermissionsEnum::CREATE_USERS)) {
            abort(403);
        }

        return Inertia::render('Admin/User/Create', [
            'roles' => Role::with('permissions')->get(),
        ]);
    }

    public function store(Request $request)
    {
        if ($request->user()->hasPermissionTo(PermissionsEnum::CREATE_USERS)) {
            abort(403);
        }
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
        ]);

        $user = User::create([...$validated, 'password' => Hash::make(Str::random(15))]);
        return redirect(route('users.show', ['user' => $user]));
    }

    public function edit(Request $request, Role $role): Response
    {
        if ($request->user()->hasPermissionTo(PermissionsEnum::UPDATE_USERS)) {
            abort(403);
        }
        $role->load('permissions');

        return Inertia::render('Admin/Role/Edit', [
            'role'        => $role,
            'permissions' => Permission::get(),
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'permissionIds' => ['required', 'array', 'min:1'],
            'permissionIds.*' => ['integer', 'exists:permissions,id'],
        ]);
        $role->syncPermissions($validated);
        return redirect(route('roles.index',));
    }

    // public function update(ProfileUpdateRequest $request): RedirectResponse
    // {
    //     $request->user()->fill($request->validated());
    //
    //     if ($request->user()->isDirty('email')) {
    //         $request->user()->email_verified_at = null;
    //     }
    //
    //     $request->user()->save();
    //
    //     return Redirect::route('profile.edit');
    // }
    //
    // public function destroy(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'password' => ['required', 'current_password'],
    //     ]);
    //
    //     $user = $request->user();
    //
    //     Auth::logout();
    //
    //     $user->delete();
    //
    //     $request->session()->invalidate();
    //     $request->session()->regenerateToken();
    //
    //     return Redirect::to('/');
    // }
}
