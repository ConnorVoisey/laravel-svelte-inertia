<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('/setTheme', function (Request $request) {
    $validated = $request->validate([
        'theme' => ['string', 'required'],
    ]);

    return response(null)
        ->cookie(
            'theme',
            $validated['theme'],
            time() + (10 * 365 * 24 * 60 * 60)
        );
})->name('theme');

Route::get('/json', function (Request $request) {
    return response()
        ->json([
            'user'     => $request->user(),
            'patients' => Patient::limit(5)->get(),
            'ip'       => $request->ip(), // TODO: replace this with something that checks the headers for
            'app_name' => env('APP_NAME'),
        ]);
})->name('json');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/patient', PatientController::class);
});

require __DIR__.'/auth.php';
