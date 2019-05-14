package Repository;

import java.io.File;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import com.escola.model.Endereco;
import com.escola.repository.EnderecoRepository;

public class EnderecoRepositoryTest {

	StandardServiceRegistry registry;
	SessionFactory sessionFactory;

	public void setUp() {
		registry = new StandardServiceRegistryBuilder().configure(new File("hibernate.cfg.xml"))
				.build();

		sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
	}

	public void destroy() {
		StandardServiceRegistryBuilder.destroy(registry);
	}

	public void add() {

		Endereco endereco = new Endereco();
		endereco.setPais("Brasil");
		endereco.setEstado("RN");
		endereco.setCidade("Natal");
		endereco.setRua("Raimundo de Medeiro Dantas");
		endereco.setNumero(344);
		endereco.setCep("59080-450");

		EnderecoRepository enderecoRepository = new EnderecoRepository(sessionFactory);
		enderecoRepository.add(endereco);
		
	}

}
