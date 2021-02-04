url: /login

Corresponde al registro de usuarios en sitio y al inicio de sesión.

| variable | valor | 
| -------- | ----- | 
| `{{login}}`|  `boolean` devuelve si el login esta habilitado en la configuración|
| **Usuario** ||
| `{{user.id}}`| `number` id del usuario|
| `{{user.name}}`| `string` nombre  |
| `{{user.surname}}`| `string` apellido  |
| `{{user.email}}`| `string` correo electrónico |
| `{{user.loged}}`|  `boolean` devuelve si el usuario está logueado |
| `{{user.account_url}}`| `string` url del perfil de usuario  |
| `{{user.logout_url}}`| `string` url de salida del usuario  |

Ejemplo utilizando bootstrap 4.3
```django

{% if login %}
   <div class="login">
   {% if user.loged == true %}
      <div class="dropdown">
         <a href="#" class="dropdown-toggle" data-toggle="dropdown">
           {{ user.name }}
         </a>
         <div class="dropdown-menu">
            <a class="dropdown-item" href="{{ user.account_url }}">
                 Mi Cuenta
            </a>
            <a class="dropdown-item" href="{{ user.logout_url }}">
                 Cerrar Sesión
            </a>
        </div>
     </div>
  {% else %}
     <a class="btn" href="{{ user.login_action }}">
        Iniciar Sesión
     </a>
  {% endif %}
  </div>
{% endif %}
```


Template version [[4.0.0 | template versión 4]]

```django
{% if login %}
    {% if user.loged == true %}
        <div class="dropdown">
            <button class="bs-login btn dropdown-toggle" 
                    data-toggle="dropdown">
                    <i class="fas fa-user"></i>
                    <span class="ml-2 ">{{ user.name }}</span>
            </button>
            <div id="usermenu" class="dropdown-menu dropdown-menu-right">
                <a  class="dropdown-item" href="{{ user.account_url }}">
                    <i class="fas fa-user-cog"></i> Mi Cuenta
                </a>
           
                <a class="dropdown-item" href="{{ user.logout_url }}">
                    <i class="fas fa-power-off mr-1"></i> Cerrar Sesión
                </a>
            </div>
        </div>
    {% else %}
        <a class="btn btn-link" href="/login" title="Iniciar Sesión">
            <i class="fas fa-user"></i>
        </a>
    {% endif %}
{% endif %}
```