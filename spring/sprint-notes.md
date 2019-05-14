SPRING NOTES

Spring is a framework to create enterprise apllication. It`s composed by 6 parts.

- Core
- DAO
- ORM
- AOP
- WEB
- JEE

The main part of the spring is the core. The core has resouce of IoC (Inversion of Control) and DI (Dependence Injection)

The idea is create a container to bundle a lot of objects and to get this objects indirectly. To add some objeto to this container, we can define a configuration. This configuration can be doing a lot of maner like xml, grove ou annotation.

The main advantage to use a conteiner is desacouple objects. Instead of instanciate objets from source, um can use the factory implemented by contanier and ask them for some object.

		ApplicationContext container = 
		new ClassPathXMLApplocationContext("static/model.xml")
		
*static/model.xml* is the path where is the config file, indicating to spring where is each object.

## Bean

The bean is a object managed by spring container. Within the container itself, these bean definition are represented as BeanDefinition objects, which contain (among other information) the folowing metadata:

- A package-qualify class name: typically the actual implementation class of the bean being defined
- Bean behavioral configuration elements, which state how the bean should behave in the container (scope, lifecicly callbacks, and so forth)
- Reference to another beans that are needed to ben to do its work. These references are also os the pool or the number of connections to use in a bean that manages a connection pool

## Dependencies

### Dependence Injection

Dependence Injection (DI) is a process whereby objects define their dependeceis only through constructor arguments, arguments to a factory methodd, or properties that are set on the object instance after it is constructed or returned from a factory method. The container then injects those dependences when it creates the bean. The process is fundamentally inverse (hence the name, Inversion of Control) of the been itself controlling the instatiation or location of its dependencies on its own by using direct construction of classes or the Service Locator Pattern.

DI exists in two major variants: Constructor-based dependency injection and Seter-based dependency injection

#### Constructor dependency injection

Considering the follow class:

	public class SimpleMovieLister {
		private MovieFinder movierFinder;
		
		public SimpleMovieLister(MovieFinder movieFinder){
			this.movieFinder = movieFinder;
		}
		
		// business logic ...
	}

##### Constructor argument resolution

Constructor argument resolution matching occurs by using the argument's type. If no potencial ambiguity no exists in the constructor arguments of a bean definition, the order in which the constructor arguments in a bean definition is the order in which those arguments are suplied to the appropriate constructor when the bean instantiated. Consider the following class:

	package x.y
	
	public class ThingOne{
		public ThingOne(ThingTwo thingTwo, ThingThree thingThree){
			// initialization using arguments constructor
		}
	}

Assuming that ThingTwo and ThingThree are not related by inheriatance, no potencial anbiguity exists. Thus, the following configuration works fine, and you do not need specify the constructor arguments indexes or types explicily in the <constructor-arg/> element:

	<beans>
		<bean id="thingOne" class="x.y.ThingOne">
			<constructor-arg ref="thingTwo"/>
			<constructor-arg ref="thingThree"/>
		</bean>
		<bean id="thingTwo" class="x.y.ThingTwo"/>
		<bean id="thingThree" class=x.y.ThingThree"/>
	</beans>

##### Constructor argument type

When a simple type is used, such as <value>true</value>, Spring can not determine the type of the value, and so cannot match by type without help.

	package examples
	
	public class ExampleBean {
		private int years;
		private String ultimateAnswer;
		
		public ExampleBean(int years, String ultimateAnswer){
			this.years = years;
			this. ultimateAnswer = ultimateAnswer;
		}
	}

In the preceding cenario, the container can use type matching with simple types if you explicitly specify the type constructor arguments by using the type attribute, as the following example shows:

	<bean id="exampleBean" class="examples.ExampleBean">
		<constructor-arg type="int" value=""750000"/>
		<constructor-arg type="java.lang.String" value="42"/>
	</bean>
	
##### Constructor arguments index

You can use the index attribute to specify the index of constructor arguments

	<bean id="exampleBean" class="examples.ExampleBean">
		<constructor-arg index="0" value=""750000"/>
		<constructor-arg index="1" value="42"/>
	</bean>

##### Constructor arguments name	

In addition to resolving the ambiguity of multiple simple values, specitying an index resolves ambiguity where a constructor has two arguments of the same type. You can also use the constructor parameter name for value disambiguation as the following:

	<bean id="exampleBean" class="examples.ExampleBean">
		<constructor-arg name="years" value=""750000"/>
		<constructor-arg name="ultimateAnswer" value="42"/>
	</bean>
	
#### Setter-based dependency injection

Setter-based DI is accomplished by the container calling setter methods on your bean after invoking a no-argument constructor or a no-argument static factory method to instatieate your bean.

	public class SimpleMovieLister {
		private MovieFinder movieFinder;
		
		public void setMovieFinder(MovierFinder movierFinder){
			this.movieFinder = movieFinder;
		}
	}
	
#### Dependence resolution process

The container performe bean dependency resolution as follows:

- The ApplicationContext is created and initialized with configuration metadata that describes all the beans. Configuration metadata can be specified by XML, Java code, or annotation.
- For each bean, its dependences are expressed in the form of properties, construcor arguments, or arguments to static fectory methods. These dependence are provider to the bean, when bean is acturaly created.
- Each property or argument is an actual definition of the value to set, or a reference to another bean in the container.
- Each property or argument that is a value is converted from its specified format to the actual type of that property or construction argument. 

### Dependency and configuration in Detail

We can define bean properties and constructor arguments as references to other manager beans or as values defined in line. Spring XML-based configuration supports sub-elements types within in <property/> and <constructor-arg/> elements for this porpose:

Some kind ok initialization can be find on the section 1.4.2 on the Sprint documentation.

### Using depends-on

When it is necessary start a been before another, like start a Drive before the dao, we can use depends-on attribute.

	<bean id="beanOne" class="ExampleBean" depends-on="manager"/>
	<bean id="manager" class="ManagerBean"/>
	
### Lazy-initialized Beans

By default, ApplicationContext instanciates all beans during the process of initialization. But, not all beans are necessary to be create immediatly. So we can set to a specific bean to be initialized be demand setting the attibute lazy-init

	<bean id="lazy" class="ExampleBean" laze-init="true"/>
	
If we want define lazu-initialization mode for all beans, we can set default-lazy-init flag on <beans/>

	<beans default-lazy-init="true">
		...
	</beans>
	
### Autowiring Collaborators

Autowiring is a feature from Spring created to avoid a lot of relation configuration by <ref/>. It's try connect a bean with another bean comparing names and type. If don't exist ambiguity in the contexto, this feature make all work connecting dependences, but if exist some ambiquity in the context that the autowiring mode can not resolve, the Spring throws a excepion.

## Bean Scopes

When you create a bean definition you create a recipe for creating instance of the class defined by that bean definition. The idea that a bean definition is a recipe is important, because it means that, as with a class, you can create many objects instance from a single recipe.

You can control not only the varuous dependencies and configuration values that are to be plugged into an object that is created from a particular bean definition but also control the scope of the objects created from a particular definition. This approach is pawerful and flexiblem because you can choose the scope of the objects you crate through configuration of having to baking on the scope of an object at the Java class level. Beans can be defined to be deploed in one of a number of scopes. The Spring framework support six scopes, four of which are available only if you use a web-aware ApplicationContext. You can also create a custom scope.

- Singleton
- Prototype
- Request
- Session
- Application
- Websocket

### Request, Session, Application and WebSocket Scopes

The request, session, application and websocket scopes are available only if you use a web-aware Spring ApplicationContext implementation (such as XmlWebApplicationContext). If you use theses scopes with regular Spring IoC containers, such as the ClassPathXmlApplicationContext, an IllegalStateException that complais about unknown bean scope is thrown.

#### Initial Web Configuration

//...

## Annotation-based Container Configuration

An alternative to XML setup is provided by annotation-based configuration, which relies on the bytecode metadata for writing up component instead of angle breacke delcaration. Instead of using XML to describe a bean wiring, the develop move the configuration into the component class itself by using annotation on relevantes class, method, or field declaration.

As always, you can register beans as individual definition, but they can be implicitly registered by including the following tag in an XML-based Spring configuration

	<beans>
		<context:annotation-config/>
	</beans>
	
Some annotations:

- @Required: delegate Spring inject with autowiring a bean with setter method
- @Autowired: delefate Spring inject dependences for field, constructor or method
- @Primary: add semantic means to aid Spring find dependencies
- @Qualifier: add semantic means to aid Spring find dependencies
- @Resource
- @PostConstructor
- @PreDestroy



## Classpath Sanning and Managed Components

The base bean definition are explicitly defined in the XML file, while the annotation drive only the dependence injection. But, its possible to annotation a class to be a scanner class of Spring components candidates. 

Candidate components are classes that match against a filter criteria and hava a corresponding bean definition registered with the container. This remove the need to use XML to perform bean registration. Its possible use bean annotation, AspectJ type expression or you own custom filter criteria to select which class have bean definition registered with the container.

### @Component and futher steriotype annotations

Spring provides funther steriotype annotations: @Component, @Service, and @Controller. @Component is a generic stereotype for any Spring-managed component, @Repository (persistence), @Service (service), and @Controller (presentation layer) are specialization of @Component for more specific use cases.

Its possible annotate another annotation to create a compose annotation. Its also called of meta-annotation.
