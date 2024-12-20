<?php

namespace App\Http\Controllers;

use App\Enums\PermissionsEnum;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index(Request $request): Response
    {
        // TODO: replace this with the perimssinos
        if ($request->user()->hasPermissionTo(PermissionsEnum::LIST_USERS)) {
            abort(403);
        }

        return Inertia::render('Admin/Role/Index', [
            'roles' => Role::with('permissions')->get(),
        ]);
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
            'permissionIds'   => ['required', 'array', 'min:1'],
            'permissionIds.*' => ['integer', 'exists:permissions,id'],
        ]);
        $role->syncPermissions($validated);

        return redirect(route('roles.index'));
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
