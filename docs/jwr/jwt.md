---
sidebar_position: 1
---

# 馃摉JSON Web Token
<p class="image-center">
  <img src="/img/jwt.png" alt="Descripci贸n de la imagen"/>
</p>

## 驴Qu茅 es JWT?

**JSON Web Token (JWT)** es un est谩ndar de internet que define una forma de transferir informaci贸n segura entre partes como un token. La informaci贸n puede ser verificada y confiable debido a que es firmada digitalmente.

JWT se compone de tres partes: header, payload y signature. El header describe el tipo de token y la forma en que se firma, el payload contiene la informaci贸n a transferir, y la signature se utiliza para verificar que la informaci贸n no ha sido alterada en tr谩nsito.

JWT se utiliza a menudo en aplicaciones de autenticaci贸n y autorizaci贸n, en las que el cliente env铆a una solicitud a un servidor con un token JWT y el servidor valida la autenticidad del token antes de proporcionar acceso a los recursos protegidos.

En resumen, JWT es una forma eficiente y segura de transmitir informaci贸n entre partes a trav茅s de un token que puede ser verificado y confiable.

## Instalaci贸n y configuraci贸n de JWT

### 馃搰Instalar y configurar JWT
 instalaremos y configuraremos el paquete de autenticaci贸n JWT de Laravel Usaremos **php-open-source-saver/jwt-auth**, un fork de **tymondesign/jwt-auth**, ya que **tymondesign/jwt-auth** parece haber sido abandonado y no es compatible con Laravel 9.

Instale la versi贸n m谩s nueva del paquete usando este comando:

```bash
composer require php-open-source-saver/jwt-auth
```

A continuaci贸n, necesitamos hacer p煤blicas las configuraciones del paquete. Copie el archivo de configuraci贸n de JWT desde el proveedor a confi/jwt.php con este comando:

```bash
php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
```

Ahora, necesitamos generar una clave secreta para manejar el cifrado del token. Para hacerlo, ejecute este comando:

```bah
php artisan jwt:secret
```

Esto actualizar谩 nuestro archivo .env con algo como esto:

**JWT_SECRET=xxxxxxxx**
Esta es la clave que se utilizar谩 para firmar nuestros tokens.

### 馃搰Configuraci贸n de AuthGuard
Dentro del archivo **config/auth.php**, tendremos que hacer algunos cambios para configurar Laravel para usar el JWT AuthGuard para alimentar la autenticaci贸n de la aplicaci贸n.

Primero, haremos los siguientes cambios en el archivo:

```js
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
    ],

],
```
En este c贸digo, estamos diciendo al guardi谩n API que use el controlador JWT y que haga del guardi谩n API el predeterminado.

隆Ahora, podemos usar el mecanismo de autenticaci贸n integrado de Laravel, con jwt-auth manejando el trabajo pesado!

### 馃搰Modificar el modelo User
Para implementar el contrato PHPOpenSourceSaverJWTAuthContractsJWTSubject en nuestro modelo de Usuario, usaremos dos m茅todos: getJWTCustomClaims() y getJWTIdentifier().

Reemplaza el c贸digo en el archivo app/Models/User.php con lo siguiente:

```js
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
use HasFactory, Notifiable;

/**
 * Los atributos que son asignables en masa.
 *
 * @var array<int, string>
 */
protected $fillable = [
    'name',
    'email',
    'password',
];

/**
 * Los atributos que deben estar ocultos para la serializaci贸n.
 *
 * @var array<int, string>
 */
protected $hidden = [
    'password',
    'remember_token',
];

/**
 * Los atributos que deben ser convertidos.
 *
 * @var array<string, string>
 */
protected $casts = [
    'email_verified_at' => 'datetime',
];

 /**
 * Obtiene el identificador que se almacenar谩 en la afirmaci贸n de sujeto del JWT.
 *
 * @return mixed
 */
public function getJWTIdentifier()
{
    return $this->getKey();
}

/**
 * Devuelve un array de valores clave, que contiene cualquier afirmaci贸n personalizada que deba agregarse al JWT.
 *
 * @return array
 */
public function getJWTCustomClaims()
{
    return [];
}
}
```
隆Eso es todo para nuestra configuraci贸n de modelos!

### 馃搰Crear el controlador Auth
Ahora, crearemos un controlador para manejar la l贸gica central del proceso de autenticaci贸n.

Primero, ejecutaremos este comando para generar el controlador:

```js
php artisan make:controller AuthController
```
Luego, reemplazaremos el contenido del controlador con el siguiente fragmento de c贸digo:

```js
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}
```
Este es un r谩pido resumen de las funciones p煤blicas en el AuthController:

- **constructor:** Establecemos esta funci贸n en nuestra clase controladora para que podamos usar el middleware auth:api dentro de ella para bloquear el acceso no autenticado a ciertos m茅todos dentro del controlador.
- **login:** Este m茅todo autentica a un usuario con su correo electr贸nico y contrase帽a. Cuando un usuario es autenticado con 茅xito, el m茅todo attempt() de la fachada Auth devuelve el token JWT. El token generado se recupera y se devuelve como JSON con el objeto usuario.
register: Este m茅todo crea el registro de usuario y inicia sesi贸n en el usuario con la generaci贸n de tokens.
- **logout:** Este m茅todo invalida el token de Auth de usuario.
- **refresh:** Este m茅todo invalida el token de Auth de usuario y genera un nuevo token.

Quedara por incluir el siguiente constructor a todos nuestros controladores:

```js
public function __construct()
    {
        $this->middleware('auth:api');
    }
```

隆Hemos terminado de configurar nuestra autenticaci贸n JWT!
