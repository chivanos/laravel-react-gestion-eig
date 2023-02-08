<?php

namespace App\Http\Controllers\API;

use App\Models\Dg;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DGController extends Controller
{
    public function store(Request $request)
    {
        $designgraphique = new Dg;

        $designgraphique->name = $request->input('name');
        $designgraphique->firstname = $request->input('firstname');
        $designgraphique->old = $request->input('old');
        $designgraphique->email = $request->input('email');
        $designgraphique->mobile = $request->input('mobile');
        $designgraphique->filiere = $request->input('filiere');
        $designgraphique->image = $request->input('image');
        $designgraphique->save();

        return response()->json([
            'status' => 200,
            'message' => 'Apprenant ajouter avec succèss'
        ]);

    }
}
