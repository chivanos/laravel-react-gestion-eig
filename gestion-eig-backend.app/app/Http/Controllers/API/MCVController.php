<?php

namespace App\Http\Controllers\API;

use App\Models\Mcv;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MCVController extends Controller
{
    public function store(Request $request)
    {
        $montagevideo = new Mcv;

        $montagevideo->name = $request->input('name');
        $montagevideo->firstname = $request->input('firstname');
        $montagevideo->old = $request->input('old');
        $montagevideo->email = $request->input('email');
        $montagevideo->mobile = $request->input('mobile');
        $montagevideo->filiere = $request->input('filiere');
        $montagevideo->image = $request->input('image');
        $montagevideo->save();

        return response()->json([
            'status' => 200,
            'message' => 'Apprenant ajouter avec succèss'
        ]);
    }
}
