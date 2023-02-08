<?php

namespace App\Http\Controllers\API;

use App\Models\Wd;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WDController extends Controller
{
    public function store(Request $request)
    {
        $designweb = new Wd;

        $designweb->name = $request->input('name');
        $designweb->firstname = $request->input('firstname');
        $designweb->old = $request->input('old');
        $designweb->email = $request->input('email');
        $designweb->mobile = $request->input('mobile');
        $designweb->filiere = $request->input('filiere');
        $designweb->image = $request->input('image');
        $designweb->save();

        return response()->json([
            'status' => 200,
            'message' => 'Apprenant ajouter avec succèss'
        ]);
    }
}
