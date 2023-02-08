<?php

namespace App\Http\Controllers\API;

use App\Models\Dw;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DWController extends Controller
{
    public function store(Request $request)
    {
        $developpementweb = new Dw;

        $developpementweb->name = $request->input('name');
        $developpementweb->firstname = $request->input('firstname');
        $developpementweb->old = $request->input('old');
        $developpementweb->email = $request->input('email');
        $developpementweb->mobile = $request->input('mobile');
        $developpementweb->filiere = $request->input('filiere');
        $developpementweb->image = $request->input('image');
        $developpementweb->save();

        return response()->json([
            'status' => 200,
            'message' => 'Apprenant ajouter avec succèss'
        ]);

        // $dev = DeveloppementWeb::table('developpement_webs')->insert([
        //     'name' => $request->session()->put('name'),
        //     'firstname' => $request->session()->put('firstname'),
        //     'old' => $request->session()->put('old'),
        //     'email' => $request->session()->put('email'),
        //     'mobile' => $request -> session()->put('mobile'),
        //     'filiere' => $request->session()->put('filiere'),
        //     'image' => $request->session()->put('image')
        // ]);

        //     return response()->json(['status' => 200, 'message' => 'Operation faite avec success!']);
     
        
    }
}
